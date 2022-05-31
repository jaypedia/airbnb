package codesquad.airbnb.accommodation.web;

import codesquad.airbnb.accommodation.service.AccommodationCommandService;
import codesquad.airbnb.accommodation.service.AccommodationQueryService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/accommodations")
public class AccommodationController {

    private final AccommodationCommandService accomodationCommandService;
    private final AccommodationQueryService accommodationQueryService;

}
