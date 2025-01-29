interface ChartData {
    labels: string[],
    datasets: Dataset[]
}

type Dataset = {
    label: string,
    data: number[],
    borderColor?: string | string[],
    backgroundColor?: string | string[],
    borderWidth?: number,
    hoverOffset?: number,
}

export const lineChartData: ChartData = {
    labels: ["Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
    ],
    datasets: [
        {
            label: "Steps by Pearl",
            data: [3000, 5000, 4500, 6000, 8000, 7000, 9000],
            borderColor: "rgb(75, 192, 192)",
        },
        {
            label: "Steps by Sam",
            data: [3500, 5000, 5500, 8000, 1200, 11000, 15000],
            borderColor: "rgb(143, 9, 9)",
        },
    ],
}

export const barChartData: ChartData = {
    labels: ["Rent", "Groceries", "Utilities", "Entertainment", "Transportation"],
    datasets: [
        {
            label: "Expenses",
            data: [1200, 300, 150, 180, 100],
            backgroundColor: [
                "rgba(255, 99, 132, 0.2)",
                "rgba(54, 162, 235, 0.2)",
                "rgba(255, 206, 86, 0.2)",
                "rgba(75, 192, 192, 0.2)",
                "rgba(153, 102, 255, 0.2)",
            ],
            borderColor:[
                "rgba(255, 99, 132, 1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 206, 86, 1)",
                "rgba(75, 192, 192, 1)",
                "rgba(153, 102, 255, 1)",
            ],
            borderWidth: 1,
        },
    ],
};

export const pieChartData: ChartData = {
    labels: ["Facebook", "Instagram", "Twitter", "YouTube", "LinkedIn"],
    datasets: [
        {
            label: "Time Spent",
            data: [120, 60, 30, 90, 45],
            backgroundColor: [
                "rgba(255, 99, 132, 0.9)",
                "rgba(54, 162, 235, 0.9)",
                "rgba(255, 206, 86, 0.9)",
                "rgba(75, 192, 192, 0.9)",
                "rgba(153, 102, 255, 0.9)",
            ],
            hoverOffset: 4,
        },
    ],
};