package codesquad.airbnb.accommodation.dto;

import codesquad.airbnb.exception.InvalidPeriodException;
import codesquad.airbnb.exception.InvalidPriceRangeException;
import codesquad.airbnb.exception.InvalideLatitudeRangeException;
import codesquad.airbnb.exception.InvalideLongitudeRangeException;
import lombok.*;

import java.time.LocalDate;

@Getter
@ToString
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

    @Builder(builderClassName = "SearchConditionBuilder")
    private AccommodationSearchCondition(LocalDate checkinDate, LocalDate checkoutDate, Integer minPricePerDate, Integer maxPricePerDate, Double minLatitude, Double maxLatitude, Double minLongitude, Double maxLongitude, Integer guestCount) {
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

    public static class SearchConditionBuilder {

        public AccommodationSearchCondition build() {
            validateProperties();
            return new AccommodationSearchCondition(checkinDate,checkoutDate, minPricePerDate, maxPricePerDate, minLatitude, maxLatitude, minLongitude, maxLongitude, guestCount);
        }

        private void validateProperties() {
            validatePeriod(checkinDate, checkoutDate);
            validatePricePerDateRange(minPricePerDate, maxPricePerDate);
            validateLatitudeRange(minLatitude, maxLatitude);
            validateLongitudeRange(minLongitude, maxLongitude);
        }

        private void validatePeriod(LocalDate checkinDate, LocalDate checkoutDate) {
            if (!checkinDate.isBefore(checkoutDate)) {
                throw new InvalidPeriodException("체크인 날짜는 체크아웃 날짜 이전이여야합니다.");
            }
            if (checkinDate.isBefore(LocalDate.now())) {
                throw new InvalidPeriodException("오늘 이전의 날짜로 조회할 수 없습니다.");
            }
        }

        /**
         * 최소, 최대의 필드범위 검증은 요청 Dto에서 처리한 것으로 가정
         */
        private void validatePricePerDateRange(Integer minPricePerDate, Integer maxPricePerDate) {
            if (minPricePerDate == null || maxPricePerDate == null) {
                return;
            }
            if (minPricePerDate >= maxPricePerDate) {
                throw new InvalidPriceRangeException("가격 최소 조건은 가격 최대조건보다 작아야합니다.");
            }
        }

        private void validateLatitudeRange(Double minLatitude, Double maxLatitude) {
            if (minLatitude == null || maxLatitude == null) {
                return;
            }
            if (minLatitude >= maxLatitude) {
                throw new InvalideLatitudeRangeException("위도 최소조건은 위도 최대조건보다 작아야합니다.");
            }
        }

        private void validateLongitudeRange(Double minLongitude, Double maxLongitude) {
            if (minLongitude == null || maxLongitude == null) {
                return;
            }
            if (minLongitude >= maxLongitude) {
                throw new InvalideLongitudeRangeException("경도 최소조건은 경도 최대조건보다 작아야합니다.");
            }
        }
    }

}
