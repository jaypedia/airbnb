package codesquad.airbnb.accommodation.web.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.ToString;
import org.springframework.format.annotation.DateTimeFormat;

import java.time.LocalDate;

@Getter
@ToString
public class AccommodationListRequest {

    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private LocalDate checkinDate;

    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private LocalDate checkoutDate;

    private Integer minPricePerDate;
    private Integer maxPricePerDate;

    private Double minLatitude;
    private Double maxLatitude;

    private Double minLongitude;
    private Double maxLongitude;

    private Integer adultCount;
    private Integer kidCount;
    private Integer infantCount;

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
        this.adultCount = adultCount;
        this.kidCount = kidCount;
        this.infantCount = infantCount;
    }
}
