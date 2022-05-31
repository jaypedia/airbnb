package codesquad.airbnb.booking.service;

import codesquad.airbnb.booking.repository.BookingRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
@Transactional
public class BookingCommandService {

    private final BookingRepository bookingRepository;

}
