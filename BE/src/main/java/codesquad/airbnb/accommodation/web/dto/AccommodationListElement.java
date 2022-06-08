package codesquad.airbnb.accommodation.web.dto;

import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;

import java.util.Random;
import java.util.concurrent.atomic.AtomicLong;

import static codesquad.airbnb.util.RandomValueGenerator.*;

@Getter
public class AccommodationListElement {

    private static final AtomicLong SAMPLE_SEQUENCE = new AtomicLong();

    public static final double SAMPLE_MIN_LATITUDE = 37.413294;
    public static final double SAMPLE_MAX_LATITUDE = 37.715133;
    public static final double SAMPLE_MIN_LONGITUDE = 126.734086;
    public static final double SAMPLE_MAX_LONGITUDE = 127.269311;
    public static final int SAMPLE_MIN_PRICE_PER_DATE = 10000;
    public static final int SAMPLE_MAX_PRICE_PER_DATE = 1000000;
    public static final String RANDOM_IMAGE_SITE_URL = "https://picsum.photos/300/300";

    private Long accommodationId;
    private String accommodationName;
    private String description;
    private int limitGuestCount;
    private int pricePerDate;
    private String locationName;
    private double latitude;
    private double longitude;
    private int roomCount;
    private int bedCount;
    private int bathRoomCount;
    private boolean hasKitchen;
    private boolean hasWifi;
    private boolean hasAirConditioner;
    private boolean hasHairDrier;
    private String mainImageUrl;
    private int reviewCount;
    private double gradeAverage;

    @Builder(access = AccessLevel.PUBLIC)
    private AccommodationListElement(Long accommodationId, String accommodationName, String description, int limitGuestCount, int pricePerDate, String locationName, double latitude, double longitude, int roomCount, int bedCount, int bathRoomCount, boolean hasKitchen, boolean hasWifi, boolean hasAirConditioner, boolean hasHairDrier, String mainImageUrl, int reviewCount, double gradeAverage) {
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
        this.mainImageUrl = mainImageUrl;
        this.reviewCount = reviewCount;
        this.gradeAverage = gradeAverage;
    }

    public static AccommodationListElement sampleCreate() {
        Long sampleId = SAMPLE_SEQUENCE.incrementAndGet();
        Random random = new Random();

        return AccommodationListElement.builder()
                .accommodationId(sampleId)
                .accommodationName("accommodation"+sampleId)
                .description("우아하고 아름다운 accommodation"+sampleId)
                .limitGuestCount(createRandomInt(random, 1, 5))
                .pricePerDate(createRandomInt(random, SAMPLE_MIN_PRICE_PER_DATE, SAMPLE_MAX_PRICE_PER_DATE))
                .locationName("서울특별시 강남구 도곡동 accommodation"+sampleId)
                .latitude(createRandomDouble(random, SAMPLE_MIN_LATITUDE, SAMPLE_MAX_LATITUDE))
                .longitude(createRandomDouble(random, SAMPLE_MIN_LONGITUDE, SAMPLE_MAX_LONGITUDE))
                .roomCount(createRandomInt(random, 1, 4))
                .bedCount(createRandomInt(random,1,4))
                .bathRoomCount(createRandomInt(random, 1,3))
                .hasKitchen(crateRandomBoolean(random))
                .hasWifi(crateRandomBoolean(random))
                .hasAirConditioner(crateRandomBoolean(random))
                .mainImageUrl(RANDOM_IMAGE_SITE_URL)
                .reviewCount(createRandomInt(random, 0,1000))
                .gradeAverage(createRandomDouble(random,0, 5))
                .build();
    }

}
