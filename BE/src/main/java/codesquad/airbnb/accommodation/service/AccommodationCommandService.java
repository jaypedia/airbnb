package codesquad.airbnb.accommodation.service;

import codesquad.airbnb.accommodation.domain.Accommodation;
import codesquad.airbnb.accommodation.repository.AccommodationRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
@RequiredArgsConstructor
public class AccommodationCommandService {

    private final AccommodationRepository accommodationRepository;

    /**
     * 숙소 등록
     */
    public Long register(Accommodation accommodation) {
        accommodationRepository.save(accommodation);
        return accommodation.getId();
    }

}
