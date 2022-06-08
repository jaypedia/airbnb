package codesquad.airbnb.accommodation.dto;

import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class AccommodationSearchCondition {

    private LocalDate checkinDate;
    private LocalDate checkoutDate;

    private Integer minPricePerDate;
    private Integer maxPricePerDate;

    private Double minLatitude;
    private Double maxLatitude;

    private Double minLongitude;
    private Double maxLongitude;

    private Integer guestCount;

    @Builder
    public AccommodationSearchCondition(LocalDate checkinDate, LocalDate checkoutDate, Integer minPricePerDate, Integer maxPricePerDate, Double minLatitude, Double maxLatitude, Double minLongitude, Double maxLongitude, Integer guestCount) {
        this.checkinDate = checkinDate;
        this.checkoutDate = checkoutDate;
        this.minPricePerDate = minPricePerDate;
        this.maxPricePerDate = maxPricePerDate;
        this.minLatitude = minLatitude;
        this.maxLatitude = maxLatitude;
        this.minLongitude = minLongitude;
        this.maxLongitude = maxLongitude;
        this.guestCount = guestCount;
    }
}
