package codesquad.airbnb.accommodation.web.dto;

import codesquad.airbnb.accommodation.domain.Accommodation;
import codesquad.airbnb.accommodation.domain.Facility;
import codesquad.airbnb.accommodation.domain.Location;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Getter
public class AccommodationSaveRequest {

    private String name;
    private String description;
    private Integer limitGuestCount;
    private Integer pricePerDate;
    private String locationName;
    private Double latitude;
    private Double longitude;
    private Integer roomCount;
    private Integer bedCount;
    private Integer bathRoomCount;
    private Boolean hasKitchen;
    private Boolean hasWifi;
    private Boolean hasAirConditioner;
    private Boolean hasHairDrier;

    @Builder
    public AccommodationSaveRequest(String name, String description, Integer limitGuestCount, Integer pricePerDate, String locationName, Double latitude, Double longitude, Integer roomCount, Integer bedCount, Integer bathRoomCount, Boolean hasKitchen, Boolean hasWifi, Boolean hasAirConditioner, Boolean hasHairDrier) {
        this.name = name;
        this.description = description;
        this.limitGuestCount = limitGuestCount;
        this.pricePerDate = pricePerDate;
        this.locationName = locationName;
        this.latitude = latitude;
        this.longitude = longitude;
        this.roomCount = roomCount;
        this.bedCount = bedCount;
        this.bathRoomCount = bathRoomCount;
        this.hasKitchen = hasKitchen;
        this.hasWifi = hasWifi;
        this.hasAirConditioner = hasAirConditioner;
        this.hasHairDrier = hasHairDrier;
    }

    public Accommodation toEntity() {
        return Accommodation.builder()
                .name(name)
                .description(description)
                .limitGuestCount(limitGuestCount)
                .pricePerDate(pricePerDate)
                .location(new Location(locationName, latitude, longitude))
                .facility(new Facility(roomCount, bedCount, bathRoomCount, hasKitchen, hasWifi, hasAirConditioner, hasHairDrier))
                .build();
    }
}
