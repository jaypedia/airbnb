package codesquad.airbnb.booking.domain;

import lombok.*;

import javax.persistence.Embeddable;

@Embeddable
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor(access = AccessLevel.PUBLIC)
@EqualsAndHashCode
public class BookingGuests {

    private int adultCount;
    private int kidCount;
    private int infantCount;

    public int totalGuestCount() {
        return adultCount + kidCount + infantCount;
    }

}
