package codesquad.airbnb.querydsl;

import codesquad.airbnb.accommodation.domain.Accommodation;
import codesquad.airbnb.accommodation.domain.Facility;
import codesquad.airbnb.accommodation.domain.Location;
import codesquad.airbnb.member.domain.Member;
import com.querydsl.core.types.dsl.BooleanExpression;
import com.querydsl.jpa.impl.JPAQueryFactory;
import lombok.extern.slf4j.Slf4j;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;
import java.util.List;

import static codesquad.airbnb.accommodation.domain.QAccommodation.accommodation;
import static org.assertj.core.api.Assertions.assertThat;

@Slf4j
@Transactional
@SpringBootTest
public class QuerydslTest {

    @Autowired
    private EntityManager em;

    private JPAQueryFactory queryFactory;

    @BeforeEach
    public void beforeInit() {
        queryFactory = new JPAQueryFactory(em);
        initAccommodations();
        initMembers();
    }

    private void initAccommodations() {
        Accommodation accommodation1 = Accommodation.builder()
                .name("숙소1")
                .description("숙소1입니다.")
                .limitGuestCount(1)
                .pricePerDate(10000)
                .location(new Location("서울특별시 어딘가", 1.11, 1.11))
                .facility(Facility.builder()
                        .roomCount(1)
                        .bedCount(1)
                        .bathRoomCount(1)
                        .hasKitchen(false)
                        .hasWifi(false)
                        .hasAirConditioner(false)
                        .hasHairDrier(false)
                        .build())
                .build();

        Accommodation accommodation2 = Accommodation.builder()
                .name("숙소2")
                .description("숙소2입니다.")
                .limitGuestCount(3)
                .pricePerDate(30000)
                .location(new Location("인천광역시 어딘가", 3.33, 3.33))
                .facility(Facility.builder()
                        .roomCount(3)
                        .bedCount(3)
                        .bathRoomCount(3)
                        .hasKitchen(false)
                        .hasWifi(true)
                        .hasAirConditioner(false)
                        .hasHairDrier(true)
                        .build())
                .build();

        Accommodation accommodation3 = Accommodation.builder()
                .name("숙소3")
                .description("숙소3입니다.")
                .limitGuestCount(5)
                .pricePerDate(50000)
                .location(new Location("대전광역시 어딘가", 5.55, 5.55))
                .facility(Facility.builder()
                        .roomCount(5)
                        .bedCount(5)
                        .bathRoomCount(5)
                        .hasKitchen(false)
                        .hasWifi(true)
                        .hasAirConditioner(false)
                        .hasHairDrier(true)
                        .build())
                .build();

        Accommodation accommodation4 = Accommodation.builder()
                .name("숙소4")
                .description("숙소4입니다.")
                .limitGuestCount(7)
                .pricePerDate(70000)
                .location(new Location("부산광역시 어딘가", 7.77, 7.77))
                .facility(Facility.builder()
                        .roomCount(7)
                        .bedCount(7)
                        .bathRoomCount(7)
                        .hasKitchen(true)
                        .hasWifi(true)
                        .hasAirConditioner(true)
                        .hasHairDrier(true)
                        .build())
                .build();

        em.persist(accommodation1);
        em.persist(accommodation2);
        em.persist(accommodation3);
        em.persist(accommodation4);
    }

    private void initMembers() {
        Member member1 = Member.builder()
                .name("member1")
                .gitHubId("gitHub1")
                .build();
        Member member2 = Member.builder()
                .name("member2")
                .gitHubId("gitHub2")
                .build();

        em.persist(member1);
        em.persist(member2);
    }

    @Test
    @DisplayName("이름으로 조회했을 때 조건에 부합하는 숙소가 반환되어야 함.")
    public void basicSelect() {
        Accommodation findAccommodation =
                queryFactory
                .select(accommodation)
                .from(accommodation)
                .where(accommodation.name.eq("숙소1"))
                .fetchOne();

        log.info("findAccommodation = {}", findAccommodation);

        assertThat(findAccommodation.getName()).isEqualTo("숙소1");
        assertThat(findAccommodation.getLimitGuestCount()).isEqualTo(1);
    }

    @Test
    @DisplayName("where절에서 여러 조건을 콤마로 나열하면 and 처리되어야한다.")
    public void basicSelect_With_And() {
        List<Accommodation> accommodations = queryFactory
                .selectFrom(accommodation)
                .where(
                        accommodation.location.latitude.goe(1),
                        accommodation.location.latitude.loe(5))
                .fetch();

        for (Accommodation findAccommodation : accommodations) {
            log.info("findAccommodation = {}", findAccommodation);
        }
        assertThat(accommodations.size()).isEqualTo(2);
    }
    
    @Test
    @DisplayName("roomCount가 null이 아닌 경우의 동적쿼리")
    public void dynamicQueryTest_roomCountNotNull() throws Exception {
        Boolean hasWifiParam = true;
        Integer roomCountParam = 7;

        List<Accommodation> accommodations = queryFactory
                .selectFrom(accommodation)
                .where(hasWifiEq(hasWifiParam), roomCountEq(roomCountParam))
                .fetch();
        for (Accommodation findAccommodation : accommodations) {
            log.info("findAccommodation = {}", findAccommodation);
        }
        assertThat(accommodations.size()).isEqualTo(1);
    }

    @Test
    @DisplayName("roomCount가 null인 경우의 동적쿼리")
    public void dynamicQueryTest_roomCountNull() {
        Boolean hasWifiParam = true;
        Integer roomCountParam = null;

        List<Accommodation> accommodations = queryFactory
                .selectFrom(accommodation)
                .where(hasWifiEq(hasWifiParam), roomCountEq(roomCountParam))
                .fetch();

        for (Accommodation findAccommodation : accommodations) {
            log.info("findAccommodation = {}", findAccommodation);
        }
        assertThat(accommodations.size()).isEqualTo(3);
    }

    private BooleanExpression roomCountEq(Integer roomCountCondition) {
        return roomCountCondition != null
                ? accommodation.facility.roomCount.eq(roomCountCondition)
                : null;
    }

    private BooleanExpression hasWifiEq(Boolean hasWifiCondition) {
        return hasWifiCondition != null
                ? accommodation.facility.hasWifi.eq(hasWifiCondition)
                : null;
    }
}
