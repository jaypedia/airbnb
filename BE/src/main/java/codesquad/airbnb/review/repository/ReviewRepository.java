package codesquad.airbnb.review.repository;

import codesquad.airbnb.review.domain.Review;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import java.util.Optional;

@Repository
@RequiredArgsConstructor
public class ReviewRepository {

    private final EntityManager em;

    public void save(Review review) {
        em.persist(review);
    }

    public Optional<Review> findById(Long id) {
        return Optional.ofNullable(em.find(Review.class, id));
    }
}
