package codesquad.airbnb.accommodation.repository;

import codesquad.airbnb.accommodation.domain.Accommodation;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AccommodationRepository extends JpaRepository<Accommodation, Long> {

}
