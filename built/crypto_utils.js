"use strict";
/*
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License. You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under the
 * License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
 * express or implied. See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var CHARSET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
var DEFAULT_SIZE = 1; /** size in bytes */
var HAS_CRYPTO = typeof window !== 'undefined' && !!window.crypto;
var IS_NODE = typeof process === 'object';
function generateRandom(sizeInBytes) {
    if (sizeInBytes === void 0) { sizeInBytes = DEFAULT_SIZE; }
    var buffer = new Uint8Array(sizeInBytes);
    if (HAS_CRYPTO) {
        window.crypto.getRandomValues(buffer);
    }
    else if (IS_NODE) {
        // warning: implicit any
        var crypto_1 = require('crypto');
        var bytes = crypto_1.randomBytes(sizeInBytes);
        // copy
        for (var i = 0; i < bytes.length; i += 1) {
            buffer[i] = bytes[i];
        }
    }
    else {
        // fall back to Math.random() if nothing else is available
        for (var i = 0; i < sizeInBytes; i += 1) {
            buffer[i] = Math.random();
        }
    }
    var state = [];
    for (var i = 0; i < sizeInBytes; i += 1) {
        var index = (buffer[i] % CHARSET.length) | 0;
        state.push(CHARSET[index]);
    }
    return state.join('');
}
exports.generateRandom = generateRandom;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3J5cHRvX3V0aWxzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2NyeXB0b191dGlscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7Ozs7Ozs7OztHQVlHOztBQUVILElBQU0sT0FBTyxHQUFHLGdFQUFnRSxDQUFDO0FBQ2pGLElBQU0sWUFBWSxHQUFHLENBQUMsQ0FBQyxDQUFDLG9CQUFvQjtBQUM1QyxJQUFNLFVBQVUsR0FBRyxPQUFPLE1BQU0sS0FBSyxXQUFXLElBQUksQ0FBQyxDQUFFLE1BQU0sQ0FBQyxNQUFjLENBQUM7QUFDN0UsSUFBTSxPQUFPLEdBQUcsT0FBTyxPQUFPLEtBQUssUUFBUSxDQUFDO0FBRTVDLHdCQUErQixXQUFrQztJQUFsQyw0QkFBQSxFQUFBLDBCQUFrQztJQUMvRCxJQUFJLE1BQU0sR0FBZSxJQUFJLFVBQVUsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNyRCxFQUFFLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO1FBQ2YsTUFBTSxDQUFDLE1BQU0sQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDeEMsQ0FBQztJQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1FBQ25CLHdCQUF3QjtRQUN4QixJQUFJLFFBQU0sR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDL0IsSUFBSSxLQUFLLEdBQUcsUUFBTSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUM1QyxPQUFPO1FBQ1AsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQztZQUN6QyxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3ZCLENBQUM7SUFDSCxDQUFDO0lBQUMsSUFBSSxDQUFDLENBQUM7UUFDTiwwREFBMEQ7UUFDMUQsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxXQUFXLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDO1lBQ3hDLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDNUIsQ0FBQztJQUNILENBQUM7SUFDRCxJQUFJLEtBQUssR0FBRyxFQUFFLENBQUM7SUFDZixHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFdBQVcsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUM7UUFDeEMsSUFBSSxLQUFLLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUM3QyxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUFDRCxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUN4QixDQUFDO0FBeEJELHdDQXdCQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBDb3B5cmlnaHQgMjAxNyBHb29nbGUgSW5jLlxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0XG4gKiBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlXG4gKiBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlclxuICogZXhwcmVzcyBvciBpbXBsaWVkLiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG5jb25zdCBDSEFSU0VUID0gJ0FCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXowMTIzNDU2Nzg5JztcbmNvbnN0IERFRkFVTFRfU0laRSA9IDE7IC8qKiBzaXplIGluIGJ5dGVzICovXG5jb25zdCBIQVNfQ1JZUFRPID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgISEod2luZG93LmNyeXB0byBhcyBhbnkpO1xuY29uc3QgSVNfTk9ERSA9IHR5cGVvZiBwcm9jZXNzID09PSAnb2JqZWN0JztcblxuZXhwb3J0IGZ1bmN0aW9uIGdlbmVyYXRlUmFuZG9tKHNpemVJbkJ5dGVzOiBudW1iZXIgPSBERUZBVUxUX1NJWkUpIHtcbiAgbGV0IGJ1ZmZlcjogVWludDhBcnJheSA9IG5ldyBVaW50OEFycmF5KHNpemVJbkJ5dGVzKTtcbiAgaWYgKEhBU19DUllQVE8pIHtcbiAgICB3aW5kb3cuY3J5cHRvLmdldFJhbmRvbVZhbHVlcyhidWZmZXIpO1xuICB9IGVsc2UgaWYgKElTX05PREUpIHtcbiAgICAvLyB3YXJuaW5nOiBpbXBsaWNpdCBhbnlcbiAgICBsZXQgY3J5cHRvID0gcmVxdWlyZSgnY3J5cHRvJyk7XG4gICAgbGV0IGJ5dGVzID0gY3J5cHRvLnJhbmRvbUJ5dGVzKHNpemVJbkJ5dGVzKTtcbiAgICAvLyBjb3B5XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBieXRlcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgYnVmZmVyW2ldID0gYnl0ZXNbaV07XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIC8vIGZhbGwgYmFjayB0byBNYXRoLnJhbmRvbSgpIGlmIG5vdGhpbmcgZWxzZSBpcyBhdmFpbGFibGVcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNpemVJbkJ5dGVzOyBpICs9IDEpIHtcbiAgICAgIGJ1ZmZlcltpXSA9IE1hdGgucmFuZG9tKCk7XG4gICAgfVxuICB9XG4gIGxldCBzdGF0ZSA9IFtdO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHNpemVJbkJ5dGVzOyBpICs9IDEpIHtcbiAgICBsZXQgaW5kZXggPSAoYnVmZmVyW2ldICUgQ0hBUlNFVC5sZW5ndGgpIHwgMDtcbiAgICBzdGF0ZS5wdXNoKENIQVJTRVRbaW5kZXhdKTtcbiAgfVxuICByZXR1cm4gc3RhdGUuam9pbignJyk7XG59XG4iXX0=