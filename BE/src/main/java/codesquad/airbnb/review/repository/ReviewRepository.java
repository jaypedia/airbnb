package codesquad.airbnb.review.repository;

import codesquad.airbnb.review.domain.Review;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ReviewRepository extends JpaRepository<Review, Long> {

}
