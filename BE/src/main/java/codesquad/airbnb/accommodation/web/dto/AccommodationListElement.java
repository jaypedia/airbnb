package codesquad.airbnb.accommodation.web.dto;

import codesquad.airbnb.accommodation.domain.Accommodation;
import codesquad.airbnb.review.domain.Review;
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

    public static AccommodationListElement create(Accommodation accommodation) {
            return AccommodationListElement.builder()
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
                    .mainImageUrl(RANDOM_IMAGE_SITE_URL)
                    // 생각해보면 숙소 하나를 조회할 때 그 숙소의 리뷰에 관한 통계 정보도 가져와야한다.
                    // 매번 모든 데이터를 가져올 때 리뷰들을 1:다로 조인해서 가져오기엔 너무 비싸다.
                    // 별도의 Dto로 조회하는게 더 나을 것 같다는 생각이 들긴 드는데, 그러기엔 현재 미션의 시간이 부족하다...
                    // 일단 랜덤으로 삽입.
                    .reviewCount(accommodation.getReviews().size())
                    // 사용자의 리뷰들에 관한 통계 정보도 사실...
                    // 별도의 일급 컬렉션 값 타입으로 처리하거나 1:1 일급 컬렉션 엔티티로 정의해서 Reviews 객체 스스로 책임지는 것이 좀더 통계 정보 관리가 편할 것 같다.
                    // 아니면 DB에서 집계함수를 통해 계산해서 통채로 계산해서 가져오거나.
                    .gradeAverage(calculateGradeRange(accommodation))
                    .build();
        }

    private static double calculateGradeRange(Accommodation accommodation) {
        return accommodation.getReviews().stream()
                .mapToInt(Review::getGrade)
                .average()
                .getAsDouble();
    }
}
