"use client";
import GoogleVoice from "@/public/assets/icons/Google_Voice_Assistant.svg";
import Image from "next/image";
import { useState } from "react";
import { FaMicrophone, FaTimes } from "react-icons/fa";
import { MdMicOff } from "react-icons/md";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

const VoiceTypingComponent = () => {
  const [showPopup, setShowPopup] = useState(false);

  const {
    transcript,
    listening,
    browserSupportsSpeechRecognition,
    isMicrophoneAvailable,
    resetTranscript,
  } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return (
      <span>
        <FaTimes />
      </span>
    );
  }

  if (!isMicrophoneAvailable) {
    return <span>Please enable microphone access.</span>;
  }

  const handleVoiceInput = () => {
    if (listening) {
      SpeechRecognition.stopListening();
    } else {
      SpeechRecognition.startListening({ continuous: true });
    }
  };

  return (
    <div className="relative">
      {/* Voice Icon Button */}

      <Image
        onClick={() => setShowPopup(true)}
        src={GoogleVoice}
        alt="GoogleVoice"
        width={24}
        height={24}
      />

      {/* Popup Modal */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
          <div className="bg-white rounded-2xl shadow-lg w-80 p-5 relative">
            {/* Close Button */}
            <button
              onClick={() => setShowPopup(false)}
              className="absolute top-3 right-3 text-gray-600 hover:text-gray-800"
            >
              <FaTimes size={20} />
            </button>

            {/* Voice Controls */}
            <div className="flex flex-col items-center gap-3">
              <button
                onClick={handleVoiceInput}
                className={`p-4 rounded-full transition ${
                  listening
                    ? "bg-red-500 text-white"
                    : "bg-green-500 text-white"
                }`}
              >
                {listening ? (
                  <MdMicOff size={28} />
                ) : (
                  <FaMicrophone size={28} />
                )}
              </button>
              <p className="text-sm text-gray-500">
                {listening ? "Listening..." : "Click to start"}
              </p>
              <button
                onClick={resetTranscript}
                className="text-xs px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
              >
                Reset
              </button>
              {/* Transcript */}
              <div className="w-full mt-3 p-2 border rounded h-24 overflow-y-auto text-sm text-gray-700">
                {transcript || "Speak something..."}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default VoiceTypingComponent;
