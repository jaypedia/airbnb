package codesquad.airbnb.accommodation.web.dto;

import lombok.Getter;

@Getter
public class AccommodationRegisterResponse {

    private Long accommodationId;

    public AccommodationRegisterResponse(Long accommodationId) {
        this.accommodationId = accommodationId;
    }
}
