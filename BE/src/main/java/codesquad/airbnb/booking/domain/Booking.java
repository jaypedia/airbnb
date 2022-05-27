package codesquad.airbnb.booking.domain;

import codesquad.airbnb.accommodation.domain.Accommodation;
import codesquad.airbnb.member.domain.Member;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

import static javax.persistence.FetchType.LAZY;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Booking {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "booking_id")
    private Long id;

    @ManyToOne(fetch = LAZY)
    @JoinColumn(name = "member_id")
    private Member member;

    @ManyToOne(fetch = LAZY)
    @JoinColumn(name = "accommodation_id")
    private Accommodation accommodation;

    private Integer pricePerDate;

    @Embedded
    private BookingPeriod bookingPeriod;

    @Embedded
    private BookingGuests bookingGuests;

    @Enumerated(EnumType.STRING)
    private BookingStatus bookingStatus;

    @Builder(access = AccessLevel.PUBLIC)
    private Booking(Member member, Accommodation accommodation, Integer pricePerDate, BookingPeriod bookingPeriod, BookingGuests bookingGuests, BookingStatus bookingStatus) {
        this.member = member;
        this.accommodation = accommodation;
        this.pricePerDate = pricePerDate;
        this.bookingPeriod = bookingPeriod;
        this.bookingGuests = bookingGuests;
        this.bookingStatus = bookingStatus;
    }
}
