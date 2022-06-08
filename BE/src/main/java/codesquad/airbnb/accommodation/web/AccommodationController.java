package codesquad.airbnb.accommodation.web;

import codesquad.airbnb.accommodation.domain.Accommodation;
import codesquad.airbnb.accommodation.service.AccommodationCommandService;
import codesquad.airbnb.accommodation.service.AccommodationQueryService;
import codesquad.airbnb.accommodation.web.dto.*;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

@Slf4j
@RestController
@RequiredArgsConstructor
@RequestMapping("/api/accommodations")
public class AccommodationController {

    private final AccommodationCommandService accommodationCommandService;
    private final AccommodationQueryService accommodationQueryService;

    /**
     * 숙소 등록
     */
    @PostMapping
    public AccommodationRegisterResponse register(@RequestBody AccommodationSaveRequest request) {
        Accommodation accommodation = request.toEntity();
        Long accommodationId = accommodationCommandService.register(accommodation);
        return new AccommodationRegisterResponse(accommodationId);
    }

    /**
     * 숙소 상세
     */
    @GetMapping("/{id}")
    public AccommodationDetailResponse accommodationDetail(@PathVariable Long id) {
        Accommodation accommodation = accommodationQueryService.findById(id);
        return AccommodationDetailResponse.create(accommodation);
    }

    /**
     * 숙소 가격들
     * (샘플로만 구현)
     */
    @GetMapping("/prices")
    public AccommodationPricesResponse priceStatistic() {
        // TODO : AccommodationQueryService에, 가격들 목록을 가져오는 메서드 구현
        return AccommodationPricesResponse.sampleApi();
    }

    /**
     * 숙소 목록(샘플로만 구현)
     */
    @GetMapping
    public AccommodationListResponse accommodationList(@ModelAttribute AccommodationListRequest listRequest) {
        //TODO : 요청에 대한 유효성 검사
        //TODO : 조건에 부합하는 숙소 목록 가져오기
        log.info("list Request = {}", listRequest);
        return AccommodationListResponse.sampleApi(100);
    }
}
