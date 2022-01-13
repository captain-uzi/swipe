import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Dimensions,
  Image,
  Platform,
  TouchableHighlight,
  StatusBar,
} from "react-native";
import SwipeCards from "react-native-swipe-cards-deck";
import { Card } from "react-native-shadow-cards";
import DateTimePickerModal from "react-native-modal-datetime-picker";

// function Card({ data }) {
//   return (
//     <View style={[styles.card, { backgroundColor: data.backgroundColor }]}>
//       <Text>{data.name}</Text>
//     </View>
//   );
// }

function StatusCard({ text }) {
  return (
    <View>
      <Text style={styles.cardsText}>{text}</Text>
    </View>
  );
}



export default function App() {
  const [cards, setCards] = useState();
  const [instruction, setInstruction] = useState(
    "Specify your dates on the calendar below ✨ \n"
  );
  const [fromDate, setFromDate] = useState(0);
  const [toDate, setToDate] = useState(0);
  const [flagDate, setFlagDate] = useState(0);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  // replace with real remote data fetching
  useEffect(() => {
    setTimeout(() => {
      setCards([
        {
          name: "Tomato",
          startDate: new Date(2021, 3, 4),
          endDate: new Date(2021, 3, 10),
          age: 24,
          gender: "F",
          message:
            "On a journey of self-discovery. I will be travelling with my husband and child. Looking for two more companions in addition to them.",
        },
        {
          name: "Aubergine",
          startDate: new Date(2021, 3, 4),
          endDate: new Date(2021, 3, 10),
          age: 23,
          gender: "M",
          message:
            "On a journey of self-discovery. I will be travelling with my husband and child. Looking for two more companions in addition to them.",
        },
        {
          name: "Courgette",
          startDate: new Date(2021, 3, 4),
          endDate: new Date(2021, 3, 10),
          age: 21,
          gender: "M",
          message:
            "On a journey of self-discovery. I will be travelling with my husband and child. Looking for two more companions in addition to them.",
        },
        {
          name: "Blueberry",
          startDate: new Date(2021, 3, 4),
          endDate: new Date(2021, 3, 10),
          age: 28,
          gender: "F",
          message:
            "On a journey of self-discovery. I will be travelling with my husband and child. Looking for two more companions in addition to them.",
        },
        {
          name: "Umm...",
          startDate: new Date(2021, 3, 4),
          endDate: new Date(2021, 3, 10),
          age: 29,
          gender: "M",
          message:
            "On a journey of self-discovery. I will be travelling with my husband and child. Looking for two more companions in addition to them.",
        },
        {
          name: "orange",
          startDate: new Date(2021, 3, 4),
          endDate: new Date(2021, 3, 10),
          age: 27,
          gender: "F",
          message:
            "On a journey of self-discovery. I will be travelling with my husband and child. Looking for two more companions in addition to them.",
        },
      ]);
    }, 3000);
  }, []);

  const showDatePicker1 = () => {
    setFlagDate(1);
    setDatePickerVisibility(true);
  };

  const showDatePicker2 = () => {
    setFlagDate(2);
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    const today = new Date();
    if (date >= today) {
      if (flagDate === 1) {
        if (
          toDate === 0 ||
          (date < toDate &&
            toDate.getMonth() -
              date.getMonth() +
              12 * (toDate.getFullYear() - date.getFullYear()) <
              2)
        ) {
          setFromDate(date);
        } else {
          setInstruction(
            "Date format not acceptable 🙈. Trips must be less than 2 months.\n"
          );
        }
      }
      if (flagDate === 2) {
        if (
          fromDate === 0 ||
          (date > fromDate &&
            date.getMonth() -
              fromDate.getMonth() +
              12 * (date.getFullYear() - fromDate.getFullYear()) <
              2)
        ) {
          setToDate(date);
        } else {
          setInstruction(
            "Date format not acceptable 🙈. Trips must be less than 2 months.\n"
          );
        }
      }
    } else {
      setInstruction(
        "Date format not acceptable 🙈. Trips must be less than 2 months.\n"
      );
    }
    hideDatePicker();
  };

  const handleYup = (card) => {
    console.log(`Yup for ${card.name}`);
    return true; // return false if you wish to cancel the action
  };
  const handleNope = (card) => {
    console.log(`Nope for ${card.name}`);
    return true;
  };
  const handleMaybe = (card) => {
    console.log(`Maybe for ${card.name}`);
    return true;
  };

  const cardRendering = (cardData) => {
    setTimeout(() => {
      setInstruction("Swipe Away 🔥! \n");
    }, 0);
    return (
      <Card
        // backgroundColor={cardData.backgroundColor}
        style={{ padding: 10, margin: 0 }}
      >
        <Text style={styles.dates}>
          From: {cardData.startDate.toDateString()}
        </Text>
        <Text style={styles.dates}>To: {cardData.endDate.toDateString()}</Text>

        <Image
          fadeDuration={100}
          style={styles.stretch}
          source={{
            width: 0,
            height: 500,
            uri: "https://picsum.photos/600/500",
          }}
        />
        <Text style={styles.title}>{cardData.name}</Text>
        <Text style={styles.info}>
          {cardData.age} {cardData.gender}
        </Text>
        <Text style={styles.message}>{cardData.message}</Text>
      </Card>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.instructionstyle}>{instruction}</Text>
      <TouchableHighlight
        activeOpacity={0.6}
        underlayColor="#DDDDDD"
        onPress={showDatePicker1}
      >
        <Text style={{ color: "#0E7AFE", fontSize: 18 }}>
          {fromDate === 0 ? "From:" : "From: " + fromDate.toDateString()}
        </Text>
      </TouchableHighlight>
      <TouchableHighlight
        activeOpacity={0.6}
        underlayColor="#DDDDDD"
        onPress={showDatePicker2}
      >
        <Text style={{ color: "#0E7AFE", fontSize: 18 }}>
          {toDate === 0 ? "To:" : "To: " + toDate.toDateString()}
        </Text>
      </TouchableHighlight>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />

      {cards && fromDate != 0 && toDate != 0 ? (
        <SwipeCards
          cards={cards}
          renderCard={cardRendering}
          keyExtractor={(cardData) => String(cardData.name)}
          renderNoMoreCards={() => <StatusCard text="No more cards..." />}
          loop={true}
          handleYup={handleYup}
          handleNope={handleNope}
          handleMaybe={handleMaybe}
          hasMaybeAction={false}
          // If you want a stack of cards instead of one-per-one view, activate stack mode
          stack={true}
          stackDepth={2}
          stackOffsetX={0}
          stackOffsetY={0}
        />
      ) : (
        <StatusCard text="Profile cards appear here!" />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    justifyContent: "center",
    alignItems: "center",
    width: 300,
    height: 300,
  },
  view: {
    flex: 1,
    flexDirection: "row",
  },
  cardsText: {
    fontSize: 22,
  },
  stretch: {
    width: "100%",
    height: Dimensions.get("window").height * 0.5,
    resizeMode: "stretch",
  },
  title: {
    fontWeight: "bold",
    fontSize: 22,
  },
  dates: {
    fontSize: 22,
    color: "#0E7AFE",
  },
  instructionstyle: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 22,
  },
  info: {
    fontSize: 22,
  },
  message: {
    fontSize: 15,
    fontStyle: "italic",
  },
});
