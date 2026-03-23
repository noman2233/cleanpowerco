"use client";
import React from "react";
import styles from "./inputComponent.module.css";

const  InputComponent=({
  label,
  placeholder,
  editable = true,
  type = "text",
  value,
  onChangeText,
  onBlur,
  isMultiline = false,
  error,
}) =>{
  return (
    <div className={styles.inputContainer}>
 
      <div className={styles.inputWrapper}>
        {isMultiline ? (
          <textarea
            placeholder={placeholder}
            value={value}
            onChange={(e) => onChangeText?.(e.target.value)}
            onBlur={(e) => onBlur?.(e.target.value)}
            readOnly={!editable}
            className={styles.message_area}
            rows={8}
          />
        ) : (
          <input
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={(e) => onChangeText?.(e.target.value)}
            onBlur={(e) => onBlur?.(e.target.value)}
            // readOnly={!editable}
            className={styles.contact_input}
            // autoCapitalize="none"
            required
          />
        )}
      </div>

      {error && <p className={styles.errorText}>{error}</p>}
    </div>
  );
}


export default InputComponent