package codesquad.airbnb.booking.domain;

import codesquad.airbnb.exception.InvalidPeriodException;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import java.time.LocalDate;

import static org.assertj.core.api.Assertions.assertThat;
import static org.assertj.core.api.Assertions.assertThatThrownBy;

@DisplayName("BookingPeriod의")
class BookingPeriodTest {

    @Test
    @DisplayName("between 메서드는 체크인, 체크아웃 날짜를 상태로 갖는 BookingPeriod를 생성한다.")
    public void between_Success_Test() {
        //given
        LocalDate checkinDate = LocalDate.now().plusDays(1);
        LocalDate checkoutDate = LocalDate.now().plusDays(2);

        //when
        BookingPeriod period = BookingPeriod.between(checkinDate, checkoutDate);

        //then
        assertThat(period.getCheckinDate()).isEqualTo(checkinDate);
        assertThat(period.getCheckoutDate()).isEqualTo(checkoutDate);
    }

    @Test
    @DisplayName("between 메서드는 체크인, 체크아웃 날짜의 전후관계의 모순이 있으면 예외를 발생시킨다.")
    public void between_Test_Failure_When_Checkin_is_after_CheckOut() {
        //given
        LocalDate checkinDate = LocalDate.now().plusDays(2);
        LocalDate checkoutDate = LocalDate.now().plusDays(1);

        //when & Then
        assertThatThrownBy(() -> BookingPeriod.between(checkinDate, checkoutDate))
                .isInstanceOf(InvalidPeriodException.class);
    }

    @Test
    @DisplayName("between 메서드는 오늘 이전의 날짜를 인자로 하여 호출 시, 예외를 발생시킨다.")
    public void between_Test_Failure_When_Checkin_is_before_Now() {
        //given
        LocalDate checkinDate = LocalDate.now().minusDays(1);
        LocalDate checkoutDate = LocalDate.now().plusDays(2);

        //when & Then
        assertThatThrownBy(() -> BookingPeriod.between(checkinDate, checkoutDate))
                .isInstanceOf(InvalidPeriodException.class);
    }

    @Test
    @DisplayName("betweenDays 메서드는 체크인,체크아웃 날짜의 일차를 반환한다.")
    public void betweenDaysTest() {
        //given
        LocalDate checkinDate = LocalDate.now().plusDays(1);
        LocalDate checkoutDate = LocalDate.now().plusDays(5);
        BookingPeriod bookingPeriod = BookingPeriod.between(checkinDate, checkoutDate);

        //when
        long betweenDays = bookingPeriod.betweenDays();

        //then
        assertThat(betweenDays).isEqualTo(4);
    }

    @Test
    @DisplayName("betweenWeeks 메서드는 체크인,체크아웃 날짜의 주차를 반환한다.")
    public void betweenWeeksTest() {
        //given
        LocalDate checkinDate = LocalDate.now().plusDays(1);
        LocalDate checkoutDate = LocalDate.now().plusDays(18);
        BookingPeriod bookingPeriod = BookingPeriod.between(checkinDate, checkoutDate);

        //when
        long betweenDays = bookingPeriod.betweenWeeks();

        //then
        assertThat(betweenDays).isEqualTo(2);
    }

    @Test
    @DisplayName("hasDuplicateDate는 다른 BookingPeriod와 겹치는 날짜가 있을 경우 true를 반환한다.")
    public void hasDuplicateDate_True_Test() {
        //given
        LocalDate checkinDate1 = LocalDate.now().plusDays(1);
        LocalDate checkoutDate1 = LocalDate.now().plusDays(2);
        BookingPeriod bookingPeriod1 = BookingPeriod.between(checkinDate1,checkoutDate1);

        //given
        LocalDate checkinDate2 = LocalDate.now().plusDays(2);
        LocalDate checkoutDate2 = LocalDate.now().plusDays(3);
        BookingPeriod bookingPeriod2 = BookingPeriod.between(checkinDate2,checkoutDate2);

        //when
        boolean hasDuplicateDate = bookingPeriod1.hasDuplicateDateWith(bookingPeriod2);

        //then
        assertThat(hasDuplicateDate).isTrue();
    }

    @Test
    @DisplayName("hasCommonDate는 다른 BookingPeriod와 겹치는 날짜가 없을 경우 false를 반환한다.")
    public void hasCommonDate_False_Test() {
        //given
        LocalDate checkinDate1 = LocalDate.now().plusDays(1);
        LocalDate checkoutDate1 = LocalDate.now().plusDays(2);
        BookingPeriod bookingPeriod1 = BookingPeriod.between(checkinDate1,checkoutDate1);

        //given
        LocalDate checkinDate2 = LocalDate.now().plusDays(3);
        LocalDate checkoutDate2 = LocalDate.now().plusDays(4);
        BookingPeriod bookingPeriod2 = BookingPeriod.between(checkinDate2,checkoutDate2);

        //when
        boolean hasDuplicateDate = bookingPeriod1.hasDuplicateDateWith(bookingPeriod2);

        //then
        assertThat(hasDuplicateDate).isFalse();
    }

}