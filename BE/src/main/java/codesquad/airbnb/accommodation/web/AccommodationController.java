package codesquad.airbnb.accommodation.web;

import codesquad.airbnb.accommodation.service.AccommodationCommandService;
import codesquad.airbnb.accommodation.service.AccommodationQueryService;
import codesquad.airbnb.accommodation.web.dto.AccommodationPricesResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/accommodations")
public class AccommodationController {

    private final AccommodationCommandService accomodationCommandService;
    private final AccommodationQueryService accommodationQueryService;

    //TODO: 가격분포 + 숙소 가격 평균
    @GetMapping("/prices")
    public AccommodationPricesResponse priceStatistic() {
        return AccommodationPricesResponse.sampleApi();
    }
}
