package codesquad.airbnb.accommodation.repository;

import codesquad.airbnb.accommodation.domain.Accommodation;
import codesquad.airbnb.accommodation.dto.AccommodationSearchCondition;

import java.util.List;

public interface AccommodationCustomRepository {

    List<Accommodation> search(AccommodationSearchCondition condition);
}
