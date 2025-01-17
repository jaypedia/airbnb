package codesquad.airbnb.accommodation.web.dto;

import codesquad.airbnb.accommodation.domain.Accommodation;
import lombok.Getter;

import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.IntStream;

@Getter
public class AccommodationListResponse {

    private int accommodationCount;
    private List<AccommodationListElement> accommodations;

    private AccommodationListResponse(int accommodationCount, List<AccommodationListElement> accommodations) {
        this.accommodationCount = accommodationCount;
        this.accommodations = accommodations;
    }

    public static AccommodationListResponse sampleApi(int numberOfSampleData) {
        List<AccommodationListElement> accommodationListElements = IntStream.range(0, numberOfSampleData)
                .mapToObj(i -> AccommodationListElement.sampleCreate())
                .collect(Collectors.toList());
        return new AccommodationListResponse(numberOfSampleData, accommodationListElements);
    }

    public static AccommodationListResponse create(List<Accommodation> accommodations) {
        List<AccommodationListElement> listElements = accommodations.stream()
                .map(AccommodationListElement::create)
                .collect(Collectors.toList());

        return new AccommodationListResponse(accommodations.size(), listElements);
    }
}
