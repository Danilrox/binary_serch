# BUSQUEDA BINARIA

# Descripcion 
Estoy estudiando algoritmos, este algoritmo busca un numero dado mediante la tecnica de busqueda binaria.

## Como funciona?
- *numberTofind* alamcena el numero a encontrar.
- La funcion *findNumber* toma como entrada un numero con el cual se tomara como punto de partida para encontrar el numero que buscamos. Sigue el siguiente flujo:
    - min = 1
    - max = number
    - avarge calcula el promedio entre el minimo y maximo
    - Si la suposición fue demasiado baja, establece min en un valor una unidad mayor que la suposición.
    - Si la suposición fue demasiado alta, establece max en un valor una unidad menor que la suposición.
    - Regresa al paso dos.