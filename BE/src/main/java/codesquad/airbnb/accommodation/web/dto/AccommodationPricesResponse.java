package codesquad.airbnb.accommodation.web.dto;

import lombok.Getter;

import java.util.List;
import java.util.Random;
import java.util.stream.Collectors;

@Getter
public class AccommodationPricesResponse {

    private static final int SAMPLE_PRICES_SIZE = 1000;
    private static final int SAMPLE_GAUSSIAN_AVERAGE = 500000;
    private static final int SAMPLE_MAX_PRICE_RANGE = 1000000;

    private final List<Integer> prices;

    private AccommodationPricesResponse(List<Integer> prices) {
        this.prices = prices;
    }

    public static AccommodationPricesResponse sampleApi() {
        Random random = new Random();
        List<Integer> randomPrices = random.ints(1, SAMPLE_MAX_PRICE_RANGE + 1)
                .limit(SAMPLE_PRICES_SIZE)
                .boxed()
                .sorted()
                .collect(Collectors.toList());
        return new AccommodationPricesResponse(randomPrices);
    }
}
