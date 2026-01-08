/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var maxDotProduct = function(nums1, nums2) {
      const m = nums1.length, n = nums2.length;
    const dp = Array.from({ length: m }, () => Array(n).fill(-Infinity));
    
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            const prod = nums1[i] * nums2[j];
            dp[i][j] = prod;
            
            if (i > 0 && j > 0) dp[i][j] = Math.max(dp[i][j], dp[i-1][j-1] + prod);
            if (i > 0) dp[i][j] = Math.max(dp[i][j], dp[i-1][j]);
            if (j > 0) dp[i][j] = Math.max(dp[i][j], dp[i][j-1]);
        }
    }
    
    return dp[m-1][n-1];
};