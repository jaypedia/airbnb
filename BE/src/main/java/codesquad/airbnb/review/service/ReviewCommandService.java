package codesquad.airbnb.review.service;

import codesquad.airbnb.review.repository.ReviewRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
@RequiredArgsConstructor
public class ReviewCommandService {

    private final ReviewRepository repository;

}
