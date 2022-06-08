package codesquad.airbnb.util;

import java.util.Random;

public class RandomValueGenerator {

    public static boolean crateRandomBoolean(Random random) {
        return random.nextBoolean();
    }

    public static double createRandomDouble(Random random, double min, double max) {
        return min + ((max - min) * random.nextDouble());
    }

    public static int createRandomInt(Random random, int min, int max) {
        return random.nextInt(max - min + 1) + min;
    }
}
