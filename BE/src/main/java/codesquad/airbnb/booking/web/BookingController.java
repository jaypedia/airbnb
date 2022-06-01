package codesquad.airbnb.booking.web;

import codesquad.airbnb.booking.service.BookingCommandService;
import codesquad.airbnb.booking.service.BookingQueryService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/bookings")
public class BookingController {

    private final BookingCommandService bookingCommandService;
    private final BookingQueryService bookingQueryService;

}
