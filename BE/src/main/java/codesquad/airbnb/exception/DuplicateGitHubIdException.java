package codesquad.airbnb.exception;

public class DuplicateGitHubIdException extends RuntimeException {

    private static final String EXCEPTION_MESSAGE = "중복되는 등록 gitHub Id가 존재합니다.";

    public DuplicateGitHubIdException() {
        super(EXCEPTION_MESSAGE);
    }
}
