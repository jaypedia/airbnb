package codesquad.airbnb.accommodation.repository;

import codesquad.airbnb.accommodation.domain.Accommodation;
import codesquad.airbnb.accommodation.domain.QAccommodation;
import codesquad.airbnb.accommodation.dto.AccommodationSearchCondition;
import com.querydsl.core.types.dsl.BooleanExpression;
import com.querydsl.jpa.impl.JPAQueryFactory;

import javax.persistence.EntityManager;
import java.time.LocalDate;
import java.util.List;

import static codesquad.airbnb.accommodation.domain.QAccommodation.accommodation;
import static codesquad.airbnb.booking.domain.QBooking.booking;
import static com.querydsl.jpa.JPAExpressions.select;

public class AccommodationRepositoryImpl implements AccommodationCustomRepository {

    private final JPAQueryFactory queryFactory;

    public AccommodationRepositoryImpl(EntityManager em) {
        this.queryFactory = new JPAQueryFactory(em);
    }

    /**
     *
     * 숙소 검색
     * 조건
     * 1. 위도, 경도 범위
     * 2. 가격 범위
     * 3. 지정 기간(날짜가 겸치는 숙소는 검색되어서는 안 된다.)
     */
    public List<Accommodation> search(AccommodationSearchCondition condition) {
        return queryFactory
                .select(accommodation).distinct()
                .from(accommodation)
                .join(accommodation.bookings, booking).fetchJoin()
                .where(
                        latitudeBetween(condition.getMinLatitude(), condition.getMaxLatitude()),
                        longitudeBetween(condition.getMinLongitude(), condition.getMinLongitude()),
                        pricePerDateBetween(condition.getMinPricePerDate(), condition.getMaxPricePerDate()),
                        limitGuestCountGoe(condition.getGuestCount()),
                        hasNotBookingBetween(condition.getCheckinDate(), condition.getCheckoutDate())
                )
                .fetch();
    }

    private BooleanExpression hasNotBookingBetween(LocalDate checkinDateCond, LocalDate checkoutDateCond) {
        if (checkinDateCond == null || checkinDateCond == null) {
            return null;
        }

        QAccommodation accommodationSub = new QAccommodation("accommodationSub");

        return select(booking.count())
                .from(booking)
                .join(booking.accommodation, accommodationSub)
                .where(
                        booking.bookingPeriod.checkinDate.between(checkinDateCond, checkoutDateCond)
                                .or(booking.bookingPeriod.checkoutDate.between(checkinDateCond, checkinDateCond)))
                .eq(0L);
    }

    private BooleanExpression limitGuestCountGoe(Integer guestCountCond) {
        return guestCountCond != null
                ? accommodation.limitGuestCount.goe(guestCountCond)
                : null;
    }

    private BooleanExpression pricePerDateBetween(Integer minPricePerDateCond, Integer maxPricePerDateCond) {
        if (minPricePerDateCond == null) {
            return pricePerDateLoe(maxPricePerDateCond);
        }
        return pricePerDateGoe(minPricePerDateCond).and(pricePerDateLoe(maxPricePerDateCond));
    }

    private BooleanExpression pricePerDateGoe(Integer minPricePerDateCond) {
        return minPricePerDateCond != null
                ? accommodation.pricePerDate.goe(minPricePerDateCond)
                : null;
    }

    private BooleanExpression pricePerDateLoe(Integer maxPricePerDateCond) {
        return maxPricePerDateCond != null
                ? accommodation.pricePerDate.loe(maxPricePerDateCond)
                : null;
    }

    private BooleanExpression latitudeBetween(Double minLatitudeCond, Double maxLatitudeCond) {
        if (minLatitudeCond == null) {
            return latitudeLoe(maxLatitudeCond);
        }
        return latitudeGoe(minLatitudeCond).and(latitudeGoe(maxLatitudeCond));
    }

    private BooleanExpression longitudeBetween(Double minLongitudeCond, Double maxLongitudeCond) {
        if (minLongitudeCond == null) {
            return longitudeLoe(maxLongitudeCond);
        }
        return longitudeGoe(minLongitudeCond).and(longitudeGoe(maxLongitudeCond));
    }

    private BooleanExpression latitudeGoe(Double latitudeGoe) {
        return latitudeGoe != null
                ? accommodation.location.latitude.goe(latitudeGoe)
                : null;
    }

    private BooleanExpression latitudeLoe(Double latitudeLoe) {
        return latitudeLoe != null
                ? accommodation.location.latitude.loe(latitudeLoe)
                : null;
    }

    private BooleanExpression longitudeGoe(Double longitudeGoe) {
        return longitudeGoe != null
                ? accommodation.location.longitude.goe(longitudeGoe)
                : null;
    }

    private BooleanExpression longitudeLoe(Double longitudeLoe) {
        return longitudeLoe != null
                ? accommodation.location.longitude.loe(longitudeLoe)
                : null;
    }

}
