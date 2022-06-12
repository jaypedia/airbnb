package codesquad.airbnb.accommodation.web.dto;

import codesquad.airbnb.accommodation.dto.AccommodationSearchCondition;
import lombok.Builder;
import lombok.Getter;
import lombok.ToString;
import org.springframework.format.annotation.DateTimeFormat;

import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;
import java.time.LocalDate;
import java.util.Optional;

@Getter
@ToString
public class AccommodationListRequest {

    @NotNull
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private LocalDate checkinDate;

    @NotNull
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private LocalDate checkoutDate;

    @Min(0)
    private Integer minPricePerDate;

    @Min(0)
    private Integer maxPricePerDate;

    @Min(-90)
    @Max(90)
    private Double minLatitude;

    @Min(-90)
    @Max(90)
    private Double maxLatitude;

    @Min(-180)
    @Max(180)
    private Double minLongitude;

    @Min(-180)
    @Max(180)
    private Double maxLongitude;

    @Min(1)
    private int adultCount;

    @Min(0)
    private int kidCount;

    @Min(0)
    private int infantCount;

    @Builder
    public AccommodationListRequest(LocalDate checkinDate, LocalDate checkoutDate, Integer minPricePerDate, Integer maxPricePerDate, Double minLatitude, Double maxLatitude, Double minLongitude, Double maxLongitude, Integer adultCount, Integer kidCount, Integer infantCount) {
        this.checkinDate = checkinDate;
        this.checkoutDate = checkoutDate;
        this.minPricePerDate = minPricePerDate;
        this.maxPricePerDate = maxPricePerDate;
        this.minLatitude = minLatitude;
        this.maxLatitude = maxLatitude;
        this.minLongitude = minLongitude;
        this.maxLongitude = maxLongitude;
        this.adultCount = Optional.ofNullable(adultCount).orElse(0);
        this.kidCount = Optional.ofNullable(kidCount).orElse(0);
        this.infantCount = Optional.ofNullable(infantCount).orElse(0);
    }

    public AccommodationSearchCondition toSearchCondition() {
        return AccommodationSearchCondition
                .builder()
                .checkinDate(checkinDate)
                .checkoutDate(checkoutDate)
                .minPricePerDate(minPricePerDate)
                .maxPricePerDate(maxPricePerDate)
                .minLatitude(minLatitude)
                .maxLatitude(maxLatitude)
                .minLongitude(minLongitude)
                .maxLongitude(maxLongitude)
                .guestCount(guestTotalGuestCount(adultCount, kidCount, infantCount))
                .build();
    }

    public int guestTotalGuestCount(Integer adultCount, Integer kidCount, Integer infantCount) {
        return adultCount + kidCount + infantCount;
    }
}
