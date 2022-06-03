package codesquad.airbnb.accommodation.web;

import codesquad.airbnb.accommodation.domain.Accommodation;
import codesquad.airbnb.accommodation.service.AccommodationCommandService;
import codesquad.airbnb.accommodation.service.AccommodationQueryService;
import codesquad.airbnb.accommodation.web.dto.AccommodationDetailResponse;
import codesquad.airbnb.accommodation.web.dto.AccommodationPricesResponse;
import codesquad.airbnb.accommodation.web.dto.AccommodationRegisterResponse;
import codesquad.airbnb.accommodation.web.dto.AccommodationSaveRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/accommodations")
public class AccommodationController {

    private final AccommodationCommandService accommodationCommandService;
    private final AccommodationQueryService accommodationQueryService;

    @PostMapping
    public AccommodationRegisterResponse register(@RequestBody AccommodationSaveRequest request) {
        Accommodation accommodation = request.toEntity();
        Long accommodationId = accommodationCommandService.register(accommodation);
        return new AccommodationRegisterResponse(accommodationId);
    }

    @GetMapping("/{id}")
    public AccommodationDetailResponse accommodationDetail(@PathVariable Long id) {
        Accommodation accommodation = accommodationQueryService.findById(id);
        return AccommodationDetailResponse.create(accommodation);
    }

    //TODO: 가격 목록 가져오기
    @GetMapping("/prices")
    public AccommodationPricesResponse priceStatistic() {
        // TODO : AccommodationQueryService에, 가격들 목록을 가져오는 메서드 구현
        return AccommodationPricesResponse.sampleApi();
    }
}
