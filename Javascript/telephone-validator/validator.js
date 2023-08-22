function telephoneChecker(str) {
    // Create array of valid patterns 
    const validPatterns = [
      //No parentheses
      // 555-555-5555
      // 555 555 5555
      // 5555555555
      // 1 555 555 5555
      /^1? ?\d{3}[ -]?\d{3}[ -]?\d{4}$/,
      //With parentheses
      // (555)555-5555
      // (555) 555-5555
      // 1 (555) 555-5555
      /(^1? ?\(\d{3}\) ?\d{3}[ -]?\d{4}$)/,
    ];
    // Test string with each regex pattern in the array 
    return validPatterns.some((pattern) => pattern.test(str));
  }
  