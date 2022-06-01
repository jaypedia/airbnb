package codesquad.airbnb.accommodation.web.dto;

import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;

@Getter
public class AccommodationPricesResponse {

    /**
     * 1박 평균 요금
     */
    private double priceAverage;

    /**
     * 가격 분포
     */
    private int between0kAnd10k;
    private int between10kAnd20k;
    private int between20kAnd30k;
    private int between30kAnd50k;
    private int between50kAnd70k;
    private int between70kAnd100k;
    private int between100kAnd150k;
    private int between150kAnd200k;
    private int between200kAnd300k;
    private int between300kAnd500k;
    private int between500kAnd700k;
    private int between700kAnd1000k;
    private int above1000k;

    @Builder(access = AccessLevel.PRIVATE)
    private AccommodationPricesResponse(Double priceAverage, Integer between0kAnd10k, Integer between10kAnd20k, Integer between20kAnd30k, Integer between30kAnd50k, Integer between50kAnd70k, Integer between70kAnd100k, Integer between100kAnd150k, Integer between150kAnd200k, Integer between200kAnd300k, Integer between300kAnd500k, Integer between500kAnd700k, Integer between700kAnd1000k, Integer above1000k) {
        this.priceAverage = priceAverage;
        this.between0kAnd10k = between0kAnd10k;
        this.between10kAnd20k = between10kAnd20k;
        this.between20kAnd30k = between20kAnd30k;
        this.between30kAnd50k = between30kAnd50k;
        this.between50kAnd70k = between50kAnd70k;
        this.between70kAnd100k = between70kAnd100k;
        this.between100kAnd150k = between100kAnd150k;
        this.between150kAnd200k = between150kAnd200k;
        this.between200kAnd300k = between200kAnd300k;
        this.between300kAnd500k = between300kAnd500k;
        this.between500kAnd700k = between500kAnd700k;
        this.between700kAnd1000k = between700kAnd1000k;
        this.above1000k = above1000k;
    }

    public static AccommodationPricesResponse sampleApi() {
        return AccommodationPricesResponse.builder()
                .priceAverage(165556.3)
                .between0kAnd10k(0)
                .between10kAnd20k(5)
                .between20kAnd30k(12)
                .between30kAnd50k(20)
                .between50kAnd70k(30)
                .between70kAnd100k(15)
                .between100kAnd150k(7)
                .between150kAnd200k(3)
                .between200kAnd300k(2)
                .between300kAnd500k(1)
                .between500kAnd700k(0)
                .between700kAnd1000k(0)
                .above1000k(0)
                .build();
    }
}
