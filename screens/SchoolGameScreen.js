import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

export default function SchoolGameScreen() {
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    if (timeLeft <= 0) {
      setGameOver(true);
      return;
    }

    const timer = setTimeout(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft]);

  const handleCatchBook = () => {
    if (!gameOver) {
      setScore((prev) => prev + 1);
    }
  };

  const restartGame = () => {
    setScore(0);
    setTimeLeft(30);
    setGameOver(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>📚 Vang de Boeken</Text>

      <Text style={styles.info}>Score: {score}</Text>
      <Text style={styles.info}>Tijd: {timeLeft}s</Text>

      {!gameOver ? (
        <TouchableOpacity
          style={styles.book}
          onPress={handleCatchBook}
        >
          <Text style={styles.bookText}>📚</Text>
        </TouchableOpacity>
      ) : (
        <>
          <Text style={styles.gameOver}>
            Tijd voorbij!
          </Text>

          <Text style={styles.finalScore}>
            Eindscore: {score}
          </Text>

          <TouchableOpacity
            style={styles.restartButton}
            onPress={restartGame}
          >
            <Text style={styles.restartText}>
              Opnieuw spelen
            </Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({

});