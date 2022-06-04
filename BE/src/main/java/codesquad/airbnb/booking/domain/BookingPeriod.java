package codesquad.airbnb.booking.domain;

import codesquad.airbnb.exception.InvalidPeriodException;
import lombok.*;

import javax.persistence.Column;
import javax.persistence.Embeddable;
import java.time.LocalDate;
import java.time.temporal.ChronoUnit;

@Embeddable
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@EqualsAndHashCode
public class BookingPeriod {

    @Column(name = "check_in_date")
    private LocalDate checkinDate;

    @Column(name = "check_out_date")
    private LocalDate checkoutDate;

    private BookingPeriod(LocalDate checkinDate, LocalDate checkoutDate) {
        this.checkinDate = checkinDate;
        this.checkoutDate = checkoutDate;
    }

    public static BookingPeriod between(LocalDate checkinDate, LocalDate checkoutDate) {
        validateDates(checkinDate, checkoutDate);
        return new BookingPeriod(checkinDate, checkoutDate);
    }

    private static void validateDates(LocalDate checkinDate, LocalDate checkoutDate) {
        if (!checkinDate.isBefore(checkoutDate)) {
            throw new InvalidPeriodException("체크인 날짜는 체크아웃 날짜 이전이여야 합니다.");
        }

        if (checkinDate.isBefore(LocalDate.now())) {
            throw new InvalidPeriodException("오늘 이전의 날짜로 예약할 수 없습니다.");
        }
    }

    public long betweenDays() {
        return ChronoUnit.DAYS.between(checkinDate,checkoutDate);
    }

    public long betweenWeeks() {
        return ChronoUnit.WEEKS.between(checkinDate, checkoutDate);
    }

    public boolean hasCommonDate(BookingPeriod otherPeriod) {
        LocalDate otherCheckInDate = otherPeriod.checkinDate;
        LocalDate otherCheckOutDate = otherPeriod.checkoutDate;

        if (otherCheckInDate.isAfter(checkoutDate) || otherCheckOutDate.isBefore(checkinDate)) {
            return false;
        }
        return true;
    }
}
