import { VictoryAxis, VictoryChart, VictoryHistogram, VictoryLabel, VictoryStack, VictoryTheme, VictoryVoronoiContainer } from "victory-native";

const startDate = new Date(
    "2024-01-01T00:00:00.000Z",
  );

const endDate = new Date(
    "2024-12-31T11:59:59.000Z",
  );

const user =
    {
        id: 1,
        name: "John Doe",
        numberOfBoxes: 14,
        numberOfBoxesToGive: 5,
        latitude: 49.2161,
        longitude: 3.9981,
        location: "Village by CA Reims",
        historicalData: [
            { month: 'Jan', owned: 10, acquired: 10 },
            { month: 'Feb', owned: 15, acquired: 3 },
            { month: 'Mar', owned: 12, acquired: 5 },
            { month: 'Apr', owned: 8, acquired: 4 },
            { month: 'May', owned: 6, acquired: 4 },
            { month: 'Jun', owned: 5, acquired: 3 },
            { month: 'Jul', owned: 5, acquired: 3 },
            { month: 'Aug', owned: 5, acquired: 3 },
            { month: 'Sep', owned: 5, acquired: 3 },
            { month: 'Oct', owned: 5, acquired: 3 },
            { month: 'Nov', owned: 5, acquired: 3 },
            { month: 'Dec', owned: 5, acquired: 3 },
        ]
    };

const boxes = [
    "Nouvelles caisses",
    "Caisses déjà présentes"
  ];

const sharedAxisStyles = {
    tickLabels: {
        fontSize: 13,
    },
    axisLabel: {
        padding: 39,
        fontSize: 13,
        fontStyle: "italic",
    },
};
  


export const Histogram = () => {
    return (
      <VictoryChart
        height={450}
        padding={70}
        scale={{ x: "time" }}
        containerComponent={
          <VictoryVoronoiContainer
            style={{}}
            // labels={({ datum }) =>
            //   datum.y > 0
            //     ? `${datum.y} ${datum.binnedData[0].genre} songs`
            //     : ''
            // }
          />
        }
        theme={VictoryTheme.clean}
      >
        <VictoryLabel
          x={225}
          y={25}
          textAnchor="middle"
          text="Ajout de caisses en 2024"
        />
  
        <VictoryStack
          colorScale={[
            "#003f5c",
            "#2f4b7c"
          ]}
        >
          {Object.entries(
            groupedData,
          ).map(([key, dataGroup]) => {
            return (
              <VictoryHistogram
                data=
                key={key}
                x="day"
                binSpacing={8}
                style={{
                  data: {
                    strokeWidth: 0,
                  },
                }}
              />
            );
          })}
        </VictoryStack>
  
        <VictoryAxis
          tickCount={12}
          tickFormat={(date) =>
            date.toLocaleString(
              "default",
              { month: "short" },
            )
          }
          style={sharedAxisStyles}
        />
  
        <VictoryAxis
          dependentAxis
          label="nombre de caisses"
          style={sharedAxisStyles}
        />
      </VictoryChart>
    );
  };
