package codesquad.airbnb.accommodation.web.dto;


import codesquad.airbnb.accommodation.domain.Accommodation;
import codesquad.airbnb.accommodation.domain.AccommodationImage;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;

import java.util.List;
import java.util.stream.Collectors;

@Getter
public class AccommodationDetailResponse {

    private Long accommodationId;
    private String accommodationName;
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
    private List<String> imageUrls;

    @Builder(access = AccessLevel.PRIVATE)
    private AccommodationDetailResponse(Long accommodationId, String accommodationName, String description, Integer limitGuestCount, Integer pricePerDate, String locationName, Double latitude, Double longitude, Integer roomCount, Integer bedCount, Integer bathRoomCount, Boolean hasKitchen, Boolean hasWifi, Boolean hasAirConditioner, Boolean hasHairDrier, List<String> imageUrls) {
        this.accommodationId = accommodationId;
        this.accommodationName = accommodationName;
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
        this.imageUrls = imageUrls;
    }

    public static AccommodationDetailResponse create(Accommodation accommodation) {
        return AccommodationDetailResponse.builder()
                .accommodationId(accommodation.getId())
                .accommodationName(accommodation.getName())
                .description(accommodation.getDescription())
                .limitGuestCount(accommodation.getLimitGuestCount())
                .pricePerDate(accommodation.getPricePerDate())
                .locationName(accommodation.getLocation().getLocationName())
                .latitude(accommodation.getLocation().getLatitude())
                .longitude(accommodation.getLocation().getLongitude())
                .roomCount(accommodation.getFacility().getRoomCount())
                .bedCount(accommodation.getFacility().getRoomCount())
                .bathRoomCount(accommodation.getFacility().getBathRoomCount())
                .hasKitchen(accommodation.getFacility().hasKitchen())
                .hasWifi(accommodation.getFacility().hasWifi())
                .hasAirConditioner(accommodation.getFacility().hasAirConditioner())
                .hasHairDrier(accommodation.getFacility().hasHairDrier())
                .imageUrls(initImageUrls(accommodation.getImages()))
                .build();
    }

    private static List<String> initImageUrls(List<AccommodationImage> images) {
        return images.stream()
                .map(AccommodationImage::getUrl)
                .collect(Collectors.toList());
    }
}
