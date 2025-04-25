<?php
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'PUT') {
    $data = json_decode(file_get_contents('php://input'), true);
    
    if (file_put_contents('./data/data.json', json_encode($data, JSON_PRETTY_PRINT))) {
        echo json_encode(['success' => true]);
    } else {
        http_response_code(500);
        echo json_encode(['error' => 'No se pudo actualizar el archivo']);
    }
}
?>