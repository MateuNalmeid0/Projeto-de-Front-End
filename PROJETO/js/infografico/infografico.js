let ctx = document.getElementById("pizzaChart").getContext("2d");

        let dadosIniciais = {
            labels: ["China", "Austrália", "Outros países", "Índia", "África do Sul", "Noruega", "Madagascar"],
            datasets: [{
                data: [26, 26, 13, 12, 9, 5, 5],
                backgroundColor: ["#FF5733", "#36A2EB", "#FFC300", "#4CAF50", "#9966FF", "#8A2BE2", "#DC143C"],
                hoverOffset: 10
            }]
        };

        let pizzaChart = new Chart(ctx, {
            type: "pie",
            data: dadosIniciais,
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'bottom',
                        labels: {
                            font: {
                                size: 14
                            },
                            color: "#333"
                        }
                    }
                }
            }
        });

        function atualizarGrafico() {
            let novosDados = [
                Math.floor(Math.random() * 30) + 10,
                Math.floor(Math.random() * 30) + 10,
                Math.floor(Math.random() * 20) + 5,
                Math.floor(Math.random() * 20) + 5,
                Math.floor(Math.random() * 15) + 5,
                Math.floor(Math.random() * 10) + 3,
                Math.floor(Math.random() * 10) + 3
            ];

            pizzaChart.data.datasets[0].data = novosDados;
            pizzaChart.update();

            document.getElementById("reservas").innerText = Math.floor(Math.random() * 800) + 500;
            document.getElementById("ano").innerText = Math.floor(Math.random() * 10) + 2010;
        }