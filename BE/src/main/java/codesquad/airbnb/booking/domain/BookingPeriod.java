package codesquad.airbnb.booking.domain;

import lombok.*;

import javax.persistence.Column;
import javax.persistence.Embeddable;
import java.time.LocalDate;
import java.time.temporal.ChronoUnit;

@Embeddable
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor(access = AccessLevel.PUBLIC)
@EqualsAndHashCode
public class BookingPeriod {

    @Column(name = "check_in_date")
    private LocalDate checkinDate;

    @Column(name = "check_out_date")
    private LocalDate checkoutDate;

    public long betweenDays() {
        return ChronoUnit.DAYS.between(checkinDate,checkoutDate);
    }

    public long betweenWeeks() {
        return ChronoUnit.WEEKS.between(checkinDate, checkoutDate);
    }

}
