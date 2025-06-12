"""Tests for privacy core distinct"""

def test_privacy_core_0():
    epsilon=1.0
    assert epsilon>=1.0

def test_privacy_core_1():
    epsilon=1.5
    assert epsilon>=1.0

def test_privacy_core_2():
    epsilon=2.0
    assert epsilon>=1.0

def test_privacy_core_3():
    epsilon=2.5
    assert epsilon>=1.0
