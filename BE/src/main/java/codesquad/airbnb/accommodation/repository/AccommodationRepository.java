package codesquad.airbnb.accommodation.repository;

import codesquad.airbnb.accommodation.domain.Accommodation;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import java.util.Optional;

@Repository
@RequiredArgsConstructor
public class AccommodationRepository {

    private final EntityManager em;

    public void save(Accommodation accommodation) {
        em.persist(accommodation);
    }

    public Optional<Accommodation> findById(Long id) {
        return Optional.ofNullable(em.find(Accommodation.class, id));
    }

}
