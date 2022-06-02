package codesquad.airbnb.exception;

public class InvalidPeriodException extends RuntimeException {

    private static final String EXCEPTION_MESSAGE = "체크인 날짜는 체크아웃 날짜보다 앞서야합니다.";

    public InvalidPeriodException() {
        super(EXCEPTION_MESSAGE);
    }
}
