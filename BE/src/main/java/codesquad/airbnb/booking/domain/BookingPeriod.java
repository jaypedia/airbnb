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
            throw new InvalidPeriodException();
        }
    }

    public long betweenDays() {
        return ChronoUnit.DAYS.between(checkinDate,checkoutDate);
    }

    public long betweenWeeks() {
        return ChronoUnit.WEEKS.between(checkinDate, checkoutDate);
    }

}
