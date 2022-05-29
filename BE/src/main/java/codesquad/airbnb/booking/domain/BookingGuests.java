package codesquad.airbnb.booking.domain;

import lombok.*;

import javax.persistence.Embeddable;

@Embeddable
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@EqualsAndHashCode
public class BookingGuests {

    private int adultCount;
    private int kidCount;
    private int infantCount;

    @Builder(access = AccessLevel.PUBLIC)
    private BookingGuests(int adultCount, int kidCount, int infantCount) {
        this.adultCount = adultCount;
        this.kidCount = kidCount;
        this.infantCount = infantCount;
    }

    public int totalGuestCount() {
        return adultCount + kidCount + infantCount;
    }

}
