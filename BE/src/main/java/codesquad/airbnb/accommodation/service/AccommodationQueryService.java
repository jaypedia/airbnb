package codesquad.airbnb.accommodation.service;

import codesquad.airbnb.accommodation.repository.AccommodationRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class AccommodationQueryService {

    private final AccommodationRepository accommodationRepository;

}
