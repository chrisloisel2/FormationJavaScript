
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;



public class Main {
	public static void main(String[] args) {
		// Création d'une collection avec un flux
		List<String> collection = new ArrayList<String>(["un", "deux", "trois", "quatre", "cinq"]);

		// Affichage des éléments de la collection
		for (String element : collection) {
			System.out.println(element);
		}
	}
}
