package codesquad.airbnb.exception;

public class AccommodationNotFoundException extends RuntimeException {

    private static final String EXCEPTION_MESSAGE = "조건에 부합하는 숙소를 찾지 못 했습니다.";

    public AccommodationNotFoundException() {
        super(EXCEPTION_MESSAGE);
    }
}
