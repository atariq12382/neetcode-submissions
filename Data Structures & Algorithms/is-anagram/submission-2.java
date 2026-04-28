class Solution {
    public static Map<Character, Integer> getMap (String s) {
        Map<Character, Integer> mapS = new HashMap<>();

        for (int i = 0; i < s.length(); i++) {
            char ch = s.charAt(i);
            if (mapS.containsKey(ch)) {
                mapS.put(ch, mapS.get(ch) + 1);
            } else {
                mapS.put(ch, 1);
            }
        }

        return mapS;
    }

    public boolean isAnagram(String s, String t) {
        Map<Character, Integer> mapS = getMap(s);
        Map<Character, Integer> mapT = getMap(t);

        if (mapS.size() != mapT.size()) {
            return false;
        }

        for (Character key : mapS.keySet()) {
            if (!mapT.containsKey(key) || !mapS.get(key).equals(mapT.get(key))) {
                return false;
            }
        }

        return true;
    }
}
